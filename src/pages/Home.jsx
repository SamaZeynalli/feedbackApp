import { Link } from "react-router"
import { useFeedbackStore } from "../store/useFeedbackStore"
import { Button } from "@/components/ui/button"


function Home() {
  const feedbacks = useFeedbackStore((state) => state.feedbacks)
  const upvoteFeedback = useFeedbackStore((state) => state.upvoteFeedback)


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Feedback-lər</h1>
      <Link to="/roadmap" className="text-blue-600 underline">Roadmap-ə keç</Link>

      <div className="mt-6 flex flex-col gap-4">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">{feedback.title}</h2>
            <p className="text-gray-600">{feedback.description}</p>
            <span className="text-sm text-blue-600">{feedback.category}</span>
            <div className="mt-2 flex items-center gap-3">
              <Button onClick={() => upvoteFeedback(feedback.id)}>
                ▲ {feedback.upvotes}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home