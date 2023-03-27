import React, { useEffect, useState } from 'react'
import CardMUI from './CardMUI'
import instance from './SettingAxios';
import { Pagination } from 'antd';
function SearchVD(props) {
   
    let keySearch = props.search.slice(3)
    const [dataSearch,setDataSearch]=useState([])
    const [dataMap,setDataMap]=useState([])
     async function searchVD(){
        try {
            let data = await instance.get("/search-video",{params:{q: keySearch, max: '5', lang: 'VN'}},)
            setDataSearch(data.data)
            setDataMap(data.data.slice(0,3))
   
        } catch (error) {
            console.log(error);
        }
    }

    function changePage(page){
        let start =(page-1)*3
        var cutData = dataSearch.slice(start,page*3)
        setDataMap(cutData);
       
        }
   useEffect(() => {
    searchVD()
   }, [keySearch])
   
  return (
    <div className='searchVD'>
        {
            dataMap.map(function(value,index){
             
                return(
                    <>
                    <div key={value.id}>
                             <CardMUI
                              title={value.title} 
                              img={value.thumbnail}
                               upload={value.uploaded}
                                view={value.views} 
                                idVD={value.id}>

                            </CardMUI>
                    </div>
                       
                    </>
                )
            })
        }
        <div style={{  margin: "auto"}}>
                            <Pagination 
                            total={dataSearch.length} 
                            onChange={changePage} 
                            showSizeChanger={false}
                            pageSize={3}
                            />
                        </div>
    </div>
  )
}

export default SearchVD