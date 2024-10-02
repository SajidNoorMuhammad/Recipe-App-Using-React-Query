import { useQuery } from "react-query";
import Header from "../components/Header";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
    const [search, setSearch] = useState('');
    const { id } = useParams();

    const fetchRecipe = async () => {
        const response = await fetch(search ?
            `https://dummyjson.com/recipes/search?q=${search}`
            :
            "https://dummyjson.com/recipes/searchF"
        );
        return await response.json();
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["recipes", search],
        queryFn: () => fetchRecipe(search),
        keepPreviousData: true,
    });

    if (isError) return message.error("Something Went Wrong");

    console.log(data);

    return (
        <>
            <Header />

            <div className="relative flex justify-center mt-10">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded-md py-3 px-4 w-[90%] mx-auto focus:outline-none focus:border-green-600"
                    placeholder="Search recipes..."
                />
            </div>
            {
                isLoading && <h1 className="flex justify-center mt-20 text-3xl text-gray-700"> <LoadingOutlined spin /> Loading... </h1>
            }
            <div className="container mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



                {data?.recipes?.map((recipe) => {
                    const { image, name, rating, id } = recipe;
                    return (
                        <div
                            key={recipe.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img src={image} alt={name} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-gray-600 text-sm">Rating: {rating}/5</span>
                                    <Link to={`/${id}`}>
                                        <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-green-600">
                                            View Recipe
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div >
        </>
    );
};

export default Recipe;
