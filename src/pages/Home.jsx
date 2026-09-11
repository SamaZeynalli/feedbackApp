
import { useFeedbackStore } from "../store/useFeedbackStore"
import FeedbackCard from "../components/FeedbackCard"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

function Home() {
  const feedbacks = useFeedbackStore((state) => state.feedbacks)

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-64 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1">
          <Header />
          <div className="flex flex-col gap-4">
            {feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home