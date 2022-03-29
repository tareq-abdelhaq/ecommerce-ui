import React from "react"
import styles from "./ProductFilter.module.css"
import FilterTitle from "../FilterTitle/FilterTitle";




class ProductFilter extends React.Component
{
     getUniqueCategories = () => {
        const allCategories = this.props.products.map(product => product.category)
        const categories = [...(new Set(allCategories))]
        categories.unshift("allCategories");
        return  categories.map((category,index) => {
            return <li key={category}>
                    <label>
                        <input type="radio" name="category" value={category}
                               checked={this.props.category === category}
                               onChange={this.props.changeCategory}
                        />
                        <span className={styles["custom__radio"]} />
                        <span className={styles["label__text"]}>{index === 0 ? "All" : category}</span>
                    </label>
                   </li>
        })
    }

    getUniqueBrands = () =>{
        const allBrands = this.props.products.map(product => product.brand)
        const brands = [...(new Set(allBrands))]
        brands.unshift("allBrands")
        return  brands.map((brand,index) => {
            return  <li key={brand}>
                        <label>
                            <input type="radio" name="brand" value={brand}
                                   checked={this.props.brand === brand}
                                   onChange={this.props.changeBrand}
                            />
                            <span className={styles["custom__radio"]} />
                            <span className={styles["label__text"]}>{index === 0 ? "All" : brand}</span>
                        </label>
                    </li>
        })
    }


    render() {
        const categoryList = this.getUniqueCategories()
        const brandsList = this.getUniqueBrands()

        return(
            <aside className={styles["aside__products__filter"]}>
                <h6 className={styles["product__filters__title"]} style={{color: this.props.dark && "#d0d2d6"}}> filters </h6>
                <div className={this.props.dark ? `${styles["product__filters__wrapper"]} ${styles["dark"]}` : styles["product__filters__wrapper"]}>
                    <FilterTitle first dark={this.props.dark}>multi range</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        <li>
                            <label>
                                <input type="radio" value= "allPrices" name="price"
                                       checked={this.props.priceRange === "allPrices"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>All</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="less than 10" name="price"
                                       checked={this.props.priceRange === "less than 10"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>&lt; 10</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="between 10 and 100" name="price"
                                       checked={this.props.priceRange === "between 10 and 100"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>$10 - $100</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value= "between 100 and 500" name="price"
                                       checked={this.props.priceRange === "between 100 and 500"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>$100 - $500</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="greater than 500" name="price"
                                       checked={this.props.priceRange === "greater than 500"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>&gt;= $500</span>
                            </label>
                        </li>
                    </ul>
                    <FilterTitle dark={this.props.dark}> price range </FilterTitle>
                    <div className={styles["slider"]}>
                        <div className={`${styles["slider__circle"]} ${styles["left"]}`} />
                        <div className={`${styles["slider__circle"]} ${styles["right"]}`} />
                    </div>
                    <FilterTitle dark={this.props.dark}>Categories</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {categoryList}
                    </ul>
                    <FilterTitle dark={this.props.dark}> brands </FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {brandsList}
                    </ul>
                </div>
            </aside>
        )
    }
}


export default ProductFilter