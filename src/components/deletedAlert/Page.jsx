"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeletedAlert({ destination }) {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    alert("Destination deleted successfully!");
    redirect("/destinations");
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destinationName}</strong> and all of its data. This
                action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete {destinationName}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}