import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Review = () => {
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        console.log(data);

        fetch("https://secret-brushlands-33023.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                reset();
                alert("Your Review successful");
                history.push("/dashboard");
            });

        console.log(data);
    };

    return (
        <div>
            <div className="offset-1 col-md-8 col-sm-10 py-4">
                <h2 className="py-3">Add Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        className="form-control mb-3"
                        placeholder="Enter Your Name"
                    />

                    <textarea
                        {...register("descrip", { required: true })}
                        className="form-control mb-3"
                        placeholder="Your Review"
                    />

                    {errors.exampleRequired && (
                        <span className="text-danger">This field is required</span>
                    )}

                    <input type="submit" className="btn btn-block w-100 btn-success" />
                </form>
            </div>
        </div>
    );
};

export default Review;
