"use client";
import { AlertCircle, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteDeploymentDialogProps {
  label?: string;
  name?: string;
  action?: "Delete" | "Remove";
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export function DeleteDialog({
  label,
  name = "",
  action = "Delete",
  showModal,
  setShowModal,
}: DeleteDeploymentDialogProps) {
  const title = `${action} ${label ?? name}`;
  const description = `Are you sure you want to ${action.toLowerCase()} ${name}?`;

  const handleClose = () => setShowModal(false);
  const handleDeleteClick = () => {
    console.log("Delete clicked");
    handleClose();
  };

  return (
    <AlertDialog open={showModal} onOpenChange={setShowModal}>
      <AlertDialogContent className="bg-zinc-800 border-0 p-0 overflow-hidden w-full max-w-[600px]">
        <AlertDialogHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-white text-lg font-semibold flex items-center">
              <AlertCircle className="text-red-500 w-5 h-5 mr-2" />
              {title}
            </AlertDialogTitle>
            <AlertDialogCancel
              onClick={handleClose}
              className="text-zinc-400 hover:text-white p-1 rounded-sm focus:ring-0 focus:ring-offset-0 bg-zinc-800 border-0 hover:bg-zinc-800 hover:bg-zinc-700/50"
            >
              <X className="h-6 w-6" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-md p-4 text-zinc-300 border-y-2 border-zinc-700/50">
          {description}
        </AlertDialogDescription>
        <AlertDialogFooter className="bg-zinc-800 p-4">
          <AlertDialogCancel
            onClick={handleClose}
            className="bg-zinc-800 text-zinc-300 hover:bg-zinc-600 hover:text-zinc-300 focus:ring-0 border-zinc-700 border-2"
          >
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteClick}
            className="bg-red-500 text-white hover:bg-red-600 focus:ring-0"
          >
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
