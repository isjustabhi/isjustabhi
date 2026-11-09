"use client";

import { answerFromKnowledge, knowledgeBase } from "@/data/knowledge";
import { useState } from "react";

export function AskAbhiram() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(knowledgeBase[0].answer);

  return (
    <section className="border-t border-ink-line pt-10">
      <p className="text-xs uppercase tracking-[0.22em] text-signal">Ask about Abhiram</p>
      <h2 className="display mt-3 text-2xl text-mist">Grounded answers only.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-muted">
        This assistant searches a curated public record: titles, papers, repos, and contact
        details. It does not call an external model and will not invent credentials.
      </p>
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          setAnswer(answerFromKnowledge(query));
        }}
      >
        <label className="sr-only" htmlFor="ask-abhiram">
          Ask a question
        </label>
        <input
          id="ask-abhiram"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask about LSCH, PersonaeAI, LLM-HyPZ, resume…"
          className="h-11 flex-1 rounded-full border border-ink-line bg-transparent px-4 text-sm text-mist outline-none transition focus:border-mist"
        />
        <button
          type="submit"
          className="h-11 rounded-full bg-mist px-5 text-sm font-bold text-ink"
        >
          Ask
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {knowledgeBase.slice(0, 5).map((entry) => (
          <button
            key={entry.id}
            type="button"
            className="rounded-full border border-ink-line px-3 py-1 text-xs text-mist-muted hover:border-mist"
            onClick={() => {
              setQuery(entry.questions[0]);
              setAnswer(entry.answer);
            }}
          >
            {entry.questions[0]}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-mist">{answer}</p>
    </section>
  );
}
