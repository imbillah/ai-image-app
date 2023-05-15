import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { generatePrompts } from "../utils";
import { preview } from "../assets";
import Form from "../components/Form";
import Loader from "../components/Loader";

const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });
  const [imageGenerating, setImageGenerating] = useState(false);
  const [loading, setLoading] = useState(false);
  const nevigate = useNavigate();
  const dbUrl = `${import.meta.env.VITE_DB_URL}/api/generate`;

  const generateImage = async () => {
    if (form.name && form.prompt) {
      try {
        setImageGenerating(true);
        const response = await axios.post(dbUrl, {
          prompt: form.prompt,
        });

        const data = await response.data;
        setForm({ ...form, image: `data:image/jpeg;base64,${data.image}` });
        Swal.fire("Good job!", "Your image has been generated", "success");
      } catch (err) {
        Swal.fire("Opps!", `${err.message}`, "error");
      } finally {
        setImageGenerating(false);
      }
    } else {
      Swal.fire("Oh No!", "Type your name & instruction", "info");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.image) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/api/posts`,
          form
        );
        response &&
          Swal.fire(
            "Yey!",
            "Your image has been shared with the community",
            "success"
          );
        nevigate("/");
      } catch (error) {
        Swal.fire("Opps!", `${err.message}`, "error");
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire(
        "Oh no!",
        "You must generate an image before sharing",
        "question"
      );
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurprise = () => {
    const randomPrompt = generatePrompts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto p-2">
      <div>
        <h1 className="font-bold text-black text-[32px] my-2">Create Image</h1>
        <p className="text-[19px] text-[grey]">
          Create visually stunning & eye catching images using DALL-E Ai and
          share them with the community
        </p>
      </div>
      <form action="" className="mt-14 max-w-2xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Form
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Type your name"
            value={form.name}
            handleChange={handleChange}
          />
          <Form
            labelName="Your Message"
            type="text"
            name="prompt"
            placeholder="Type what you want to generate. Use the button above to get ideas"
            value={form.prompt}
            handleChange={handleChange}
            handleSurprise={handleSurprise}
            isSurprise
          />
        </div>
        <div className="relative flex justify-center items-center bg-gray-50 border border-gray-400 text-gray-700 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500 p-3 h-64 w-64 my-5">
          {form.image ? (
            <img
              src={form.image}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-30"
            />
          )}
          {imageGenerating && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.6)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>
        <div className="my-4 flex gap-4">
          <button
            type="button"
            onClick={generateImage}
            className="w-full text-center px-4 py-2.5 bg-[#00204a] rounded-md text-white text-md sm:w-auto"
            disabled={imageGenerating}
          >
            {imageGenerating ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="my-5">
          <p className="text-gray-700 text-[16px] p-2">
            Once the image is generated you can share it with the community
          </p>
          <button
            type="submit"
            className="w-full text-center px-4 py-2.5 bg-teal-500 rounded-md text-white text-md sm:w-auto"
          >
            {loading ? "Sharing.." : "Share in Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
