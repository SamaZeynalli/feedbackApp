
import { useFeedbackStore } from "../store/useFeedbackStore"
import FeedbackCard from "../components/FeedbackCard"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

function Home() {
  const feedbacks = useFeedbackStore((state) => state.feedbacks)
  const activeCategory = useFeedbackStore((state) => state.activeCategory)
  const sortBy = useFeedbackStore((state) => state.sortBy)

  const filteredFeedbacks =
    activeCategory === "All"
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.category === activeCategory.toLowerCase())

      const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
        switch (sortBy) {
          case "Most Upvotes":
            return b.upvotes - a.upvotes
          case "Least Upvotes":
            return a.upvotes - b.upvotes
          case "Most Comments":
            return b.comments.length - a.comments.length
          case "Least Comments":
            return a.comments.length - b.comments.length
          default:
            return 0
        }
      })


  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-64 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1">
          <Header />
          <div className="flex flex-col gap-4">
            {sortedFeedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home