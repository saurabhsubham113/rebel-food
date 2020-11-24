import React, { useState, useEffect } from 'react';
import BrandLayout from './Components/BrandLaout';
import ApiHandle from "./Axios/ApiHandle";
import Pagination from "./Components/Pagination";
import './App.css';

const App = () => {
  const [Brands, setBrands] = useState([]);
  const [BrandImage, setBrandImage] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      const res = await ApiHandle.getBeerBrand()
      const brImg = await ApiHandle.getBrandImage()
      setBrands(res)
      setBrandImage(brImg)
      setLoading(false);
    };

    fetchBrands();
  }, []);

  //Get current posts
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentBrands = Brands.slice(indexOfFirstPage, indexOfLastPage)
  const howManyPages = Math.ceil(Brands.length / postsPerPage)


  return (
    <div className='container mt-2'>
      <h1 className='text-primary text-center'>Beer Brands</h1>
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      < BrandLayout loading={loading} brands={currentBrands} image={BrandImage} />

    </div>
  );
};

export default App;

