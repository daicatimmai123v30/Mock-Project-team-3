export const productsListSelector = (state) =>{

    const results =state.prdt.productsList.filter((product)=>{
        
        return (
            state.prdt.filters.selectType.length >0? 
            product.title.includes(state.prdt.filters.search) && state.prdt.filters.selectType.includes(product.idCategory)
            :product.title.includes(state.prdt.filters.search)
            
        );
            
        });

            return results.sort((prd1,prd2)=>{

                if( state.prdt.filters.sort ==='name'){
                    return prd1.title.toLowerCase()=== prd2.title.toLowerCase() ? 0 
                     : prd1.title.toLowerCase()> prd2.title.toLowerCase() ? 1
                     : -1
                }else{
                    if( state.prdt.filters.sort ==='price'){
                        return prd1.price=== prd2.price ? 0 
                         : prd1.price> prd2.price ? 1
                         : -1
                    }else {
                        return 0;
                    }
                }
            });
        
     
    };
export const categoriesSelector = (state) => state.prdt.categories;
export const searchValueSelector = (state) => state.prdt.filters.search;
export const filterCategoriesSelector = (state) => state.prdt.filters.selectType;