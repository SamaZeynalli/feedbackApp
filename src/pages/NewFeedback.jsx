import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate } from "react-router"
import { useFeedbackStore } from "../store/useFeedbackStore"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const feedbackSchema = z.object({
  title: z.string().min(1, "Başlıq boş ola bilməz"),
    category: z.string().min(1, "Kateqoriya seçilməlidir"),
  description: z.string().min(1, "Təsvir boş ola bilməz"),
})


function NewFeedback() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
    },
  })

  const navigate = useNavigate()
  const addFeedback = useFeedbackStore((state) => state.addFeedback)

  const onSubmit = (data) => {
    addFeedback(data)
    navigate("/")
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create New Feedback</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block font-bold mb-1">Feedback Title</label>
          <input
            {...register("title")}
            className="border rounded-lg p-2 w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block font-bold mb-1">Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kateqoriya seç" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="ui">UI</SelectItem>
                  <SelectItem value="ux">UX</SelectItem>
                  <SelectItem value="enhancement">Enhancement</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
          )}
        </div>
        
        <div>
          <label className="block font-bold mb-1">Feedback Detail</label>
          <textarea
            {...register("description")}
            className="border rounded-lg p-2 w-full"
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white rounded-lg p-2 font-bold"
        >
          Add Feedback
        </button>
      </form>
    </div>
  )
}

export default NewFeedback