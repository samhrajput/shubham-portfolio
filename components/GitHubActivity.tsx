import React, { useEffect, useState } from "react";

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload: any;
}

const GitHubActivity: React.FC = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/samhrajput/events/public")
      .then(res => res.json())
      .then(data => {
        setEvents(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getEventTitle = (event: GitHubEvent) => {
    switch (event.type) {
      case "PushEvent":
        return "Pushed commits";
      case "PullRequestEvent":
        return "Opened a pull request";
      case "IssuesEvent":
        return "Worked on an issue";
      case "CreateEvent":
        return "Created a repository";
      default:
        return event.type.replace("Event", "");
    }
  };

  return (
    <section
      id="github"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        GitHub Activity
      </h2>

      <p className="text-slate-400 mb-12">
        Recent pushes, PRs & issues — auto-fetched from my public GitHub activity.
      </p>

      {loading ? (
        <p className="text-slate-500">Loading activity...</p>
      ) : (
        <div className="space-y-6">
          {events.map(event => (
            <div
              key={event.id}
              className="group border border-white/10 bg-[#0D121F]/60 rounded-2xl p-6 transition-all duration-300 hover:border-[#E59173]/40 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-400">
                    pushed in{" "}
                    <span className="text-[#E59173] font-semibold">
                      {event.repo.name}
                    </span>
                  </p>

                  <p className="text-lg text-white font-semibold mt-1">
                    {getEventTitle(event)}
                  </p>

                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#E59173] font-medium hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

                <span className="text-xs text-slate-500">
                  {new Date(event.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GitHubActivity;
