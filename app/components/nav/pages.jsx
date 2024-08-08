import { useState, useEffect } from "react";

const Nav = () => {
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (searchValue) {
            const fetchOptions = async () => {
                try {
                    const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`);
                    if (!res.ok) {
                        throw new Error("Couldn't fetch search results");
                    }
                    const data = await res.json();
                    const formattedOptions = data.recipes.map(recipe => ({ value: recipe.name, id: recipe.id }));
                    setOptions(formattedOptions);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchOptions();
        } else {
            setOptions([]);
        }
    }, [searchValue]);

    return (
        <div className="w-full max-w-[830px] flex items-center justify-between mx-auto py-[10px]">
            <nav className="flex items-center">
                <div className="nav__item">
                    <h3 className="text-black font-mono text-[24px] font-bold leading-normal mr-[190px]">
                        Welcome, Nusratullokh 🤙
                    </h3>
                    <p className="text-[#676161] font-roboto text-[16px] font-normal leading-normal tracking-[0.4px] mr-[160px]"> Discover whatever you need</p>
                </div>
            </nav>
            <div className="flex items-center gap-[10px]">
              <input className="bg-[#f8f1f1a5] rounded-[10px] w-[300px] h-[46px]" type="text" placeholder=" Search food " />
            </div>
        </div>
    );
};

export default Nav;
