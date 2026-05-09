"use client"

import { useEffect } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  LeftToRightListBulletIcon,
  LeftToRightListNumberIcon,
  Link02Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@hugeicons/core-free-icons"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { Button } from "@/components/common/ui/button"
import { cn } from "@/lib/utils"

type RichTextEditorProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

type ToolbarAction = {
  label: string
  icon: IconSvgElement
  isActive: (editor: Editor) => boolean
  onClick: (editor: Editor) => void
}

const toolbarActions: ToolbarAction[] = [
  {
    label: "Bold",
    icon: TextBoldIcon,
    isActive: (editor) => editor.isActive("bold"),
    onClick: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    label: "Italic",
    icon: TextItalicIcon,
    isActive: (editor) => editor.isActive("italic"),
    onClick: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    label: "Underline",
    icon: TextUnderlineIcon,
    isActive: (editor) => editor.isActive("underline"),
    onClick: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    label: "Bullet list",
    icon: LeftToRightListBulletIcon,
    isActive: (editor) => editor.isActive("bulletList"),
    onClick: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    label: "Numbered list",
    icon: LeftToRightListNumberIcon,
    isActive: (editor) => editor.isActive("orderedList"),
    onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
]

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write details...",
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          class: "text-blue-600 underline underline-offset-2",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "min-h-32 px-3 pb-3 pt-2 text-sm text-slate-900 outline-none dark:text-white [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:text-slate-400 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (!editor || editor.getHTML() === value) {
      return
    }

    editor.commands.setContent(value, { emitUpdate: false })
  }, [editor, value])

  function setLink() {
    if (!editor) {
      return
    }

    const currentLink = editor.getAttributes("link").href as string | undefined
    const nextLink = window.prompt("Enter link URL", currentLink ?? "")

    if (nextLink === null) {
      return
    }

    if (!nextLink) {
      editor.chain().focus().unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: nextLink }).run()
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md bg-slate-100 dark:bg-white/5",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-1 px-2 py-2">
        {toolbarActions.map((action) => (
          <Button
            key={action.label}
            type="button"
            variant={editor && action.isActive(editor) ? "secondary" : "ghost"}
            size="icon-sm"
            disabled={!editor}
            onClick={() => editor && action.onClick(editor)}
            aria-label={action.label}
            title={action.label}
          >
            <HugeiconsIcon icon={action.icon} size={15} strokeWidth={1.7} />
          </Button>
        ))}
        <Button
          type="button"
          variant={editor?.isActive("link") ? "secondary" : "ghost"}
          size="icon-sm"
          disabled={!editor}
          onClick={setLink}
          aria-label="Add link"
          title="Add link"
        >
          <HugeiconsIcon icon={Link02Icon} size={15} strokeWidth={1.7} />
        </Button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
