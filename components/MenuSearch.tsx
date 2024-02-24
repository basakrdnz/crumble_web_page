import React from "react";
import SearchBar from "./SearchBar";

const MenuSearch = () => {
  return (
    <section className="m-10">
      <div className="flex flex-col w-1/2 gap-5">
        <h1>Our Menu</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo
          massa, elementum quis malesuada et, volutpat sed felis. In hac
          habitasse platea dictumst. Curabitur a bibendum lacus, sit amet
          pharetra nisl. Ut tincidunt luctus sapien, in sagittis urna lobortis
          a. Vivamus vel mauris id eros gravida venenatis.
        </p> 
        </div>
        <SearchBar></SearchBar>
     
    </section>
  );
};

export default MenuSearch;
