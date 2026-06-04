"use client";

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Card,
} from "@heroui/react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    const res = await fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();
       alert("Destination added successfully!");
    // console.log(data);
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Add Destination</h2>

      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Label className="block mb-2">Category</Label>

              <select
                name="category"
                required
                className="w-full border rounded-2xl p-2"
              >
                <option value="">Select Category</option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="City">City</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Price */}
            <TextField name="price" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>

          </div>

          <Button
            type="submit"
            className="w-full bg-cyan-500 text-white rounded-none"
          >
            Add Destination
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestinationPage;