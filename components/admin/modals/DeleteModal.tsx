import { Button } from "@/components/admin/ui/button"
import { ShellModal } from "@/components/admin/modals/ShellModal"

type DeleteModalProps = {
  open: boolean
  title?: string
  description?: string
  deleteText?: string
  onDelete: () => void
  onClose: () => void
}

export function DeleteModal({
  open,
  title = "Delete item?",
  description = "This action cannot be undone.",
  deleteText = "Delete",
  onDelete,
  onClose,
}: DeleteModalProps) {
  return (
    <ShellModal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              onDelete()
              onClose()
            }}
          >
            {deleteText}
          </Button>
        </>
      }
    >
      <div />
    </ShellModal>
  )
}
