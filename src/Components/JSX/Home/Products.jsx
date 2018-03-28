import React from 'react';
import { NavLink } from 'react-router-dom';



const ProductsMenu = () => {
    return (
        <div className="container-fluid" id="products_menu">
            <div className="row justify-content-center">
                <div className="d-none d-lg-block col-xl-12 text-center">
                    <ul>
                        <li className="products_li">
                            <NavLink to="/Solar">Solar</NavLink>
                        </li>
                         <li className="products_li">
                            <NavLink to="/HeatingandAir">Heating & Air</NavLink>
                         </li>
                        <li className="products_li">
                            <NavLink to="/Roofing">Roofing</NavLink>
                        </li>
                        <li className="products_li">
                            <NavLink to="/PowrGuard">PoWr Guard</NavLink>
                        </li>
                        <li className="products_li">
                            <NavLink to="/StorageSolutions">Storage Solutions</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}


export default ProductsMenu;