"use client";
import { useState } from "react";
import { DeleteDialog } from "@/components/delete-dialog";
import { Button } from "./ui/button";

export function Demo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setShowModal(true)}>
        Delete Deployment
      </Button>

      <DeleteDialog
        showModal={showModal}
        setShowModal={setShowModal}
        label="Deployment"
        name="default"
        action="Delete"
      />
    </div>
  );
}
