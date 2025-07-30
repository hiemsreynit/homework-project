import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { z } from "zod";
import { useCreateProductMutation } from "../../redux/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaValidation = z.object({
  title: z.string().min(2, "Title must be at least 2 letters up!"),
  description: z
    .string()
    .max(10, "Description must be at least 10 letters up!"),
  tags: z.string().min(2, "Tags must be at least 2 letters up!"),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  weight: z.number(),
  availabilityStatus: z.string(),
});

export function CreateProductFormComponent() {
  // Using create product mutation
  const [createProduct, { data, error, isLoading }] = useCreateProductMutation();
  console.log(isLoading);
  console.log(error);
  console.log(data);

  // Define using with form
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      title: "",
      description: "",
      tags: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      weight: 0,
      availabilityStatus: "",
    },
  });

  // Access Token
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg";

  function onSubmit(values) {
    console.log(values);
    createProduct({
      newProduct: {
        title: values.title,
        description: values.description,
        tags: values.tags,
        price: values.price,
        discountPercentage: values.discountPercentage,
        rating: values.rating,
        weight: values.weight,
        availabilityStatus: values.availabilityStatus,
      },
      accessToken: accessToken,
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="block">
          <Label htmlFor="title" className="text-black">Title</Label>
        </div>
        <TextInput
          id="email"
          type="text"
          placeholder="Title"
          required {...register("title")}
        />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="description">Description</Label>
        </div>
        <TextInput id="description" type="text" placeholder="description" required {...register("description")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="tags">Tags</Label>
        </div>
        <TextInput id="tags" type="text" placeholder="tags" required {...register("tags")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="price">Price</Label>
        </div>
        <TextInput id="price" type="number" placeholder="price" required {...register("price")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="discountPercentage">Discount Percentage</Label>
        </div>
        <TextInput id="discountPercentage" type="number" placeholder="Discount Percentage" required {...register("discountPercentage")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="rating">Rating</Label>
        </div>
        <TextInput id="rating" type="number" placeholder="rate" required {...register("rating")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="weight">Weight</Label>
        </div>
        <TextInput id="weight" type="number" placeholder="weight" required {...register("weight")} />
      </div>
      <div>
        <div className="block">
          <Label htmlFor="availableStatus">Available Status</Label>
        </div>
        <TextInput id="availableStatus" type="text" placeholder="available status" required {...register("availableStatus")} />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
