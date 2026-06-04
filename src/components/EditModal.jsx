"use client";

import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  TextArea,
  Label,
  TextField,
  Surface,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export default function EditModal({ destination }) {
  const [open, setOpen] = useState(false);

  const {
    _id,
    destinationName,
    country,
    price,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());

    console.log(formDataObj);

   
      const res = await fetch(
        `http://localhost:5000/destination/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        }
      );

      const result = await res.json();
      // console.log(result);

      setOpen(false); // close only after success
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onPress={() => setOpen(true)}
        className="px-6 py-3 bg-white border border-gray-300 hover:border-yellow-400 hover:text-yellow-600 text-gray-700 font-semibold rounded-xl"
      >
        <BiEdit /> Edit Destination
      </Button>

      {/* MODAL */}
      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-xl">

              <Modal.Header>
                <Modal.Heading>Edit Destination</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface>
                  <form onSubmit={onSubmit} className="space-y-6">

                    <TextField name="destinationName" defaultValue={destinationName}>
                      <Label>Name</Label>
                      <Input />
                    </TextField>

                    <TextField name="country" defaultValue={country}>
                      <Label>Country</Label>
                      <Input />
                    </TextField>

                    <TextField name="price" defaultValue={price}>
                      <Label>Price</Label>
                      <Input type="number" />
                    </TextField>

                    <TextField name="description" defaultValue={description}>
                      <Label>Description</Label>
                      <TextArea />
                    </TextField>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onPress={() => setOpen(false)}
                      >
                        Cancel
                      </Button>

                      <Button type="submit">
                        Save Changes
                      </Button>
                    </div>

                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}