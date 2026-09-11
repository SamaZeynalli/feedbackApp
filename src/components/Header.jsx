import { Button } from "@/components/ui/button"
import { useFeedbackStore } from "../store/useFeedbackStore"

function Header() {
  const feedbacks = useFeedbackStore((state) => state.feedbacks)

  return (
    <div className="bg-slate-800 rounded-lg px-6 py-4 flex items-center justify-between mb-6">

      <div className="flex items-center gap-4 text-white">
        <span className="text-xl">💡</span>
        <span className="font-bold text-lg">{feedbacks.length} Suggestions</span>
      </div>

      <div className="text-slate-300 text-sm">
        Sort by: <span className="font-bold text-white">Most Upvotes</span>
      </div>

      <Button className="bg-purple-600 hover:bg-purple-700">
        + Add Feedback
      </Button>

    </div>
  )
}

export default Header