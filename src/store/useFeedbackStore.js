import { create } from "zustand"
import { feedbackData } from "../data/feedbackData"

export const useFeedbackStore = create((set) => ({
  feedbacks: feedbackData,

  activeCategory: "All",

  setActiveCategory: (category) => set({ activeCategory: category }),

    upvoteFeedback: (id) =>
    set((state) => ({
      feedbacks: state.feedbacks.map((feedback) =>
        feedback.id === id
          ? { ...feedback, upvotes: feedback.upvotes + 1 }
          : feedback
      ),
    })),
}))
