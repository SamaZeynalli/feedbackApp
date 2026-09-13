import { Button } from "@/components/ui/button"
import
 {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select"
import { useFeedbackStore } from "../store/useFeedbackStore"

function Header() {
  const feedbacks = useFeedbackStore((state) => state.feedbacks)
  const sortBy = useFeedbackStore((state) => state.sortBy)
  const setSortBy = useFeedbackStore((state) => state.setSortBy)

  return (
    <div className="bg-slate-800 rounded-lg px-6 py-4 flex items-center justify-between mb-6">

      <div className="flex items-center gap-4 text-white">
        <span className="text-xl">💡</span>
        <span className="font-bold text-lg">{feedbacks.length} Suggestions</span>
      </div>

      <div className="flex items-center gap-2 text-slate-300 text-sm">
        <span>Sort by:</span>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px] border-none text-white font-bold bg-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Most Upvotes">Most Upvotes</SelectItem>
            <SelectItem value="Least Upvotes">Least Upvotes</SelectItem>
            <SelectItem value="Most Comments">Most Comments</SelectItem>
            <SelectItem value="Least Comments">Least Comments</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="bg-purple-600 hover:bg-purple-700">
        + Add Feedback
      </Button>

    </div>
  )
}

export default Header