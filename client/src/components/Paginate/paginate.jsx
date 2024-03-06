import { useState, useEffect } from "react";

const paginate = (data, numItems = 10) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  const nextPage = ()=> setCurrentPage((prevPage) => prevPage + 1)
  const prevPage = ()=> setCurrentPage((prevPage) => prevPage - 1)
  const resetPage = ()=> setCurrentPage(1)

  useEffect(() => { if(numItems===10) setCurrentPage(1) }, [data]);
  useEffect(() => { if(numItems!==10 && data.length%numItems===0 && currentPage > 1) prevPage() }, [data]);

  useEffect(() => {
    const lastIndx = currentPage * numItems;
    const firstIndx = lastIndx - numItems;
    const currentItems = data.slice(firstIndx, lastIndx);
    setCurrentPageData(currentItems);
  }, [data, currentPage, numItems]);

  return {
    currentPage,
    currentItems: currentPageData,
    nextPage,
    prevPage,
    resetPage,
    totalPages: Math.ceil(data.length / numItems),
  };
}
export default paginate