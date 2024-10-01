import { useQuery } from "react-query";
import Header from "../components/Header";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const [search, setSearch] = useState('');

    const fetchRecipeDetails = async () => {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        return await response.json();
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["recipeDetails", id],
        queryFn: () => fetchRecipeDetails(id),
    });

    if (isError) return message.error("Something went wrong");

    if (isLoading) {
        return (
            <div className="flex justify-center mt-20 text-3xl text-gray-700">
                <LoadingOutlined spin /> Loading...
            </div>
        );
    }

    const { image, name, ingredients, instructions, rating } = data;

    return (
        <>
            <Header />

            <div className="container mx-auto py-10 px-6">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transform transition hover:scale-105 duration-300 ease-in-out">
                    
                    <div className="relative">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-full h-full object-cover transition duration-500 hover:opacity-90" 
                        />
                    </div>

                    <div className="p-8 flex flex-col justify-between">
                        
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{name}</h1>

                        <div className="flex items-center mb-6">
                            <span className="text-yellow-500 text-2xl mr-2">⭐</span>
                            <span className="text-gray-700 text-xl font-semibold">Rating: {rating}/5</span>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ingredients</h2>
                        <ul className="list-disc list-inside mb-8 text-gray-700 text-lg space-y-3">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instructions</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">{instructions}</p>

                        <div className="mt-auto">
                            <button
                                className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out shadow-md"
                                onClick={() => window.history.back()}
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;
