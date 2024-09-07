import React, { useEffect, useState } from 'react';
import { fetchData } from '../ProductApi';
import Filter from '../pages/Filter';
import ProductTable from '../pages/ProductTable';
import Pagination from '../pages/Pagination';
import "./Home.css"
const productsPerPage = 20;

export default function Home() {
    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedPopularityRange, setSelectedPopularityRange] = useState(null);
    const [sortOption, setSortOption] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData(); // Fetch data
                const transformedData = transformData(data); // Transform data
                setProductData(transformedData); // Update state with transformed data
                setFilteredData(transformedData); // Initialize filtered data
            } catch (err) {
                setError(err); // Handle errors
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        loadData(); // Call the async function
    }, []); // Empty dependency array ensures this runs once on mount

    useEffect(() => {
        filterAndSortData();
    }, [searchQuery, selectedPriceRange, selectedPopularityRange, sortOption, productData]);

    const transformData = (data) => {
        const products = data.products;
        return Object.keys(products).map(key => {
            const product = products[key];
            return {
                title: product.title,
                price: parseInt(product.price, 10),
                popularity: parseInt(product.popularity, 10),
            };
        });
    };

    const filterAndSortData = () => {
        let filtered = [...productData];

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Price range filter
        if (selectedPriceRange) {
            filtered = filtered.filter(product =>
                product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
            );
        }

        // Popularity range filter
        if (selectedPopularityRange) {
            filtered = filtered.filter(product =>
                product.popularity >= selectedPopularityRange.min && product.popularity <= selectedPopularityRange.max
            );
        }

        // Sorting
        if (sortOption) {
            filtered.sort((a, b) => {
                if (sortOption === 'price-asc') return a.price - b.price;
                if (sortOption === 'price-desc') return b.price - a.price;
                if (sortOption === 'popularity-asc') return a.popularity - b.popularity;
                if (sortOption === 'popularity-desc') return b.popularity - a.popularity;
                return 0;
            });
        }

        setFilteredData(filtered);
    };

    // Calculate the index of the first and last product to display
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (loading) {
        return<>

        <div className="load">
        <div className='loader' ></div>
        </div>
        
        </> ; // Show loading state
    }

    if (error) {
        return <>

        <div className="error_page">
        <div id="main">
    	<div className="fof">
       
        		<h1>  Error 404</h1>
                <button className='reload_button' onClick={() => window.location.reload()}>Reload</button> 
    	</div>


      
        </div>
        
</div>
        </>; // Show error state
    }

    return (
        <div className='main' >
            <div className="one">
                <h1>Product Dashboard </h1>
            </div>

            <div className="container">
                <Filter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedPriceRange={selectedPriceRange}
                    setSelectedPriceRange={setSelectedPriceRange}
                    selectedPopularityRange={selectedPopularityRange}
                    setSelectedPopularityRange={setSelectedPopularityRange}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
                <ProductTable products={currentProducts} />
                <Pagination
                    pageNumbers={pageNumbers}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>

        </div>
    );
}
