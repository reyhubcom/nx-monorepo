export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Welcome, </span>
            Osis Wiki 👋
          </h1>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>
            <a href="#commands"> What&apos;s next? </a>
          </div>
          <div className="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z" />
            </svg>
          </div>
        </div>

        <div id="middle-content">
          <div id="learning-materials" className="rounded shadow">
            <h2>Validator & Delegate </h2>
            <a
              href="https://osis.exchange"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Osis Exchange
                <span> Limitless Crypto Exchange </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://blog.nrwl.io/?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Staking Coins
                <span> Everything Is In There </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/Nrwl_io/videos?utm_source=nx-project&sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>DeFi</title>
                <path
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                DeFi
                <span> Nx Show, talks & tutorials </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://nx.dev/react-tutorial/01-create-application?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>
                Interactive tutorials
                <span> Create an app, step-by-step </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://nxplaybook.com/?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
               
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Osis Store
                <span> Premium Custom Shirts.</span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div id="other-links">
            <a
              id="nx-console"
              className="button-pill rounded shadow"
              href="https://freename.io?ref=huge-olives-refuse&utm_source=clipboard"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visual Studio Code</title>
                <path
                    d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                    fill="#6600ff"
                />
                <path
                    d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                    fill="white"
                  />
              </svg>
              <span>
                Web3 Domains 
                <span> And TLDs Yours, Forever</span>
              </span>
            </a>
            <div id="nx-cloud" className="rounded shadow">
              <div>
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                    fill="#009973"
                  />
                  <path
                    d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                    fill="white"
                  />
                </svg>
                <h2>
                  NxCloud
                  <span>Enable faster CI & better DX</span>
                </h2>
              </div>
              <p>
                You can activate distributed tasks executions and caching by
                running:
              </p>
              <pre>nx connect-to-nx-cloud</pre>
              <a
                href="https://nx.app/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                What is Nx Cloud?{' '}
              </a>
            </div>
            <a
              id="nx-repo"
              className="button-pill rounded shadow"
              href="https://github.com/nrwl/nx?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
               d="M288 0C146.6 0 32 114.6 32 256s114.6 256 256 256s256-114.6 256-256S429.4 0 288 0zM370.1 289.5C371.6 288.5 373.1 288 374.8 288h12.11c3.148 0 6.055 2 7.387 5l5.328 12.75c.6055 1.5 2.059 2.5 3.633 2.5h3.875c1.695 0 3.27-1.125 3.754-2.875l4.238-14.5C415.6 289.3 417.2 288 419 288h6.055c2.18 0 3.996 1.75 3.996 4v13c0 2.125 .8477 4.125 2.301 5.625l11.87 11.88c3.027 3 4.723 7.125 4.723 11.38v24.5c0 1.793-.4531 3.52-1.021 5.195c-2.395 3.523-5.031 6.867-7.646 10.22l-5.5 5.461C430.8 382.3 426.7 384 422.4 384H407.3c-4.238 0-8.355-1.75-11.26-4.75l-13.08-13c-6.66-6.625-16.23-9.25-25.43-7l-21.19 5.375c-1.332 .25-2.664 .375-3.996 .375h-10.29c-4.238 0-8.355-1.625-11.26-4.625L298.8 348.5c-1.453-1.5-2.301-3.625-2.301-5.75v-10.12c0-3.25 1.938-6.25 5.086-7.5l39.23-15.75c2.059-.75 3.875-1.75 5.691-3L370.1 289.5zM288 48c18.66 0 36.66 2.699 53.88 7.328v.7344c0 9.945-4.623 19.32-12.51 25.38l-29.86 22.93c-5.086 3.375-4.723 11 .8477 13.75l10.78 5.5c5.449 2.625 8.84 8.25 8.84 14.25V216c0 4.375-3.512 8-7.992 8h-3.027c-3.027 0-5.812-1.75-7.145-4.375c-1.574-3.125-5.934-3.375-7.75-.375l-17.44 29C273.7 253 268.5 256 262.9 256H262.6C258.3 256 254.3 257.8 251.3 260.8L245.6 266.4c-3.027 3.125-3.027 8.125 0 11.25l5.691 5.75c3.027 3 4.723 7 4.723 11.25V304c0 8.875-7.145 16-15.98 16H233.9c-6.055 0-11.62-3.375-14.29-8.875L196.9 265.9C194.5 261 187.1 260 184.1 263.9L164.7 283.3C161.7 286.3 157.6 288 153.3 288H82.72C81.1 277.5 80 266.9 80 256C80 141.3 173.3 48 288 48z"
               />
              </svg>
              <span>
                Nx is open source
                <span> Love Nx? Give us a star! </span>
              </span>
            </a>
          </div>
        </div>

        <div id="commands" className="rounded shadow">
          <h2>Next steps</h2>
          <p>Here are some things you can do with Nx:</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Add UI library
            </summary>
            <pre>
              <span># Generate UI lib</span>
              nx g @nrwl/next:library ui
              <span># Add a component</span>
              nx g @nrwl/next:component button --project=ui
            </pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View interactive project graph
            </summary>
            <pre>nx graph</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Run affected commands
            </summary>
            <pre>
              <span># see what&apos;s been affected by changes</span>
              nx affected:graph
              <span># run tests for current changes</span>
              nx affected:test
              <span># run e2e tests for current changes</span>
              nx affected:e2e
            </pre>
          </details>
        </div>

        <p id="love">
          Designed by Rey with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Index;
