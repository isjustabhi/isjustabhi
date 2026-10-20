"use client";

import { answerFromKnowledge, knowledgeBase } from "@/data/knowledge";
import { useState } from "react";

export function AskAbhiram() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(knowledgeBase[0].answer);

  return (
    <section className="rounded-3xl border border-ink-line bg-ink-surface p-6 sm:p-8">
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
          placeholder="Ask about LSCH, LLM-HyPZ, DataLoom…"
          className="h-11 flex-1 rounded-full border border-ink-line bg-ink px-4 text-sm text-mist outline-none focus:border-signal"
        />
        <button
          type="submit"
          className="h-11 rounded-full bg-signal px-5 text-sm font-medium text-[#06202a]"
        >
          Ask
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {knowledgeBase.slice(0, 5).map((entry) => (
          <button
            key={entry.id}
            type="button"
            className="rounded-full border border-ink-line px-3 py-1 text-xs text-mist-muted hover:border-signal hover:text-signal"
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
