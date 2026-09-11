import { Button } from "@/components/ui/button"
import { useFeedbackStore } from "../store/useFeedbackStore"

function FeedbackCard({ feedback }) {
  const upvoteFeedback = useFeedbackStore((state) => state.upvoteFeedback)

  return (
    <div className="bg-white rounded-lg p-6 flex items-center gap-8">
      <Button
        onClick={() => upvoteFeedback(feedback.id)}
        variant="secondary"
        className="flex flex-col h-auto py-2 px-4"
      >
        <span>▲</span>
        <span className="font-bold">{feedback.upvotes}</span>
      </Button>

      <div className="flex-1">
        <h2 className="text-lg font-bold text-slate-800">{feedback.title}</h2>
        <p className="text-slate-500 mt-1">{feedback.description}</p>
        <span className="inline-block mt-3 bg-slate-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-lg">
          {feedback.category}
        </span>
      </div>

      <div className="flex items-center gap-2 text-slate-800 font-bold">
        💬 {feedback.comments.length}
      </div>
    </div>
  )
}

export default FeedbackCard