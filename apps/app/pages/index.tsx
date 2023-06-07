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
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                 <?xml version="1.0" ?><svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#ffcf01;}.cls-2{fill:#f9a01b;}.cls-3{fill:#a64d2c;}</style></defs><title/><g data-name="08 Exchange" id="_08_Exchange"><circle class="cls-1" cx="41.3" cy="38.4" r="24"/><circle class="cls-2" cx="41.3" cy="38.4" r="18"/><circle class="cls-1" cx="89.3" cy="86.4" r="24"/><circle class="cls-2" cx="89.3" cy="86.4" r="18"/><path class="cls-3" d="M62.7,26.6a39,39,0,0,1,39,39,1,1,0,0,0,1.71.71L110.7,59a1,1,0,0,0,0-1.41h0a1,1,0,0,0-1.41,0l-5.65,5.65A41.05,41.05,0,0,0,62.7,24.6,1,1,0,0,0,62.7,26.6Z"/><path class="cls-3" d="M57.7,41.6a19,19,0,1,0-19,19A19,19,0,0,0,57.7,41.6Zm-19,17a17,17,0,1,1,17-17A17,17,0,0,1,38.7,58.6Z"/><path class="cls-3" d="M38.7,19.1c1.38,0,1.34-2.5,0-2.5S37.36,19.1,38.7,19.1Z"/><path class="cls-3" d="M36,19.26c1.37-.17,1-2.64-.3-2.48S34.61,19.43,36,19.26Z"/><path class="cls-3" d="M41.57,19.27c1.24,0,1.53-2.32.18-2.49S40.11,19.27,41.57,19.27Z"/><path class="cls-3" d="M16.2,41.6c0-1.38-2.5-1.34-2.5,0S16.2,42.94,16.2,41.6Z"/><path class="cls-3" d="M16.37,44.34c-.17-1.35-2.64-1-2.48.3S16.53,45.68,16.37,44.34Z"/><path class="cls-3" d="M16.37,38.86c.17-1.37-2.32-1.63-2.48-.3S16.2,40.19,16.37,38.86Z"/><path class="cls-3" d="M16.25,36.59A23.05,23.05,0,0,1,33.69,19.15a1,1,0,0,0-.43-2,25.06,25.06,0,0,0-19,19A1,1,0,0,0,16.25,36.59Z"/><path class="cls-3" d="M16.25,46.61a1,1,0,0,0-2,.43c3,13.41,15.67,19,19.18,19a1,1,0,0,0,.22-2A23.05,23.05,0,0,1,16.25,46.61Z"/><path class="cls-3" d="M43.71,19.15A23.06,23.06,0,0,1,61.15,36.59a1,1,0,0,0,2-.43,25.06,25.06,0,0,0-19-19A1,1,0,0,0,43.71,19.15Z"/><path class="cls-3" d="M44.15,66a25.06,25.06,0,0,0,19-19,1,1,0,0,0-2-.43A23.05,23.05,0,0,1,43.71,64,1,1,0,0,0,44.15,66Z"/><path class="cls-3" d="M38.7,66.6c1.38,0,1.34-2.5,0-2.5S37.36,66.6,38.7,66.6Z"/><path class="cls-3" d="M41.44,63.93c-1.37.17-1,2.64.3,2.48S42.78,63.77,41.44,63.93Z"/><path class="cls-3" d="M35.78,66.42c1.24,0,1.53-2.32.18-2.49S34.32,66.42,35.78,66.42Z"/><path class="cls-3" d="M61.2,41.6c0,1.38,2.5,1.34,2.5,0S61.2,40.26,61.2,41.6Z"/><path class="cls-3" d="M61,38.86c.17,1.37,2.64,1,2.48-.3S60.87,37.51,61,38.86Z"/><path class="cls-3" d="M63.52,44.65c.17-1.37-2.32-1.63-2.48-.3S63.35,46,63.52,44.65Z"/><path class="cls-3" d="M42,39.64a3.77,3.77,0,0,0-1.83-6.23V31.89a1,1,0,0,0-2,0v1.39h-.08V31.89a1,1,0,0,0-2,0v1.39H33.7a1,1,0,0,0,0,2h1.16V47.91H33.7a1,1,0,0,0,0,2h2.36V51.3a1,1,0,0,0,2,0V49.91h.08V51.3a1,1,0,0,0,2,0V49.83A5.51,5.51,0,0,0,42,39.64Zm-2.79-4.36a1.8,1.8,0,0,1,0,3.6H36.86v-3.6Zm0,12.63H36.86v-7h2.32C43.83,40.88,43.83,47.91,39.19,47.91Z"/><path class="cls-3" d="M86.7,108.6a19,19,0,1,0-19-19A19,19,0,0,0,86.7,108.6Zm0-36a17,17,0,1,1-17,17A17,17,0,0,1,86.7,72.6Z"/><path class="cls-3" d="M86.7,64.6c-1.38,0-1.34,2.5,0,2.5S88,64.6,86.7,64.6Z"/><path class="cls-3" d="M83.84,67.27H84c1.37-.17,1.06-2.65-.3-2.48S82.59,67.27,83.84,67.27Z"/><path class="cls-3" d="M89.57,67.27c1.26,0,1.48-2.33.18-2.49s-1.64,2.31-.3,2.48Z"/><path class="cls-3" d="M64.2,89.6c0-1.38-2.5-1.34-2.5,0S64.2,90.94,64.2,89.6Z"/><path class="cls-3" d="M64.37,92.34c-.17-1.36-2.64-1-2.48.3S64.53,93.69,64.37,92.34Z"/><path class="cls-3" d="M61.89,86.55c-.16,1.35,2.31,1.69,2.48.3S62.05,85.22,61.89,86.55Z"/><path class="cls-3" d="M81.69,67.15a1,1,0,0,0-.43-2,25.06,25.06,0,0,0-19,19,1,1,0,0,0,2,.43A23.06,23.06,0,0,1,81.69,67.15Z"/><path class="cls-3" d="M81.69,112A23.06,23.06,0,0,1,64.25,94.61a1,1,0,0,0-2,.43,25.06,25.06,0,0,0,19,19A1,1,0,0,0,81.69,112Z"/><path class="cls-3" d="M111.11,84.15a25.06,25.06,0,0,0-19-19,1,1,0,0,0-.43,2,23.06,23.06,0,0,1,17.44,17.43A1,1,0,0,0,111.11,84.15Z"/><path class="cls-3" d="M109.15,94.61A23.06,23.06,0,0,1,91.71,112a1,1,0,0,0,.43,2,25.06,25.06,0,0,0,19-19A1,1,0,0,0,109.15,94.61Z"/><path class="cls-3" d="M86.7,112.1c-1.38,0-1.34,2.5,0,2.5S88,112.1,86.7,112.1Z"/><path class="cls-3" d="M89.44,111.93c-1.37.17-1,2.63.3,2.48S90.8,111.77,89.44,111.93Z"/><path class="cls-3" d="M84,111.93c-1.45-.17-1.63,2.49-.18,2.49C85,114.42,85.3,112.1,84,111.93Z"/><path class="cls-3" d="M109.2,89.6c0,1.38,2.5,1.34,2.5,0S109.2,88.26,109.2,89.6Z"/><path class="cls-3" d="M109,86.86c.17,1.37,2.64,1,2.48-.3S108.87,85.52,109,86.86Z"/><path class="cls-3" d="M109,92.34c-.17,1.37,2.31,1.67,2.48.3S109.2,91,109,92.34Z"/><path class="cls-3" d="M82.7,94.6a1,1,0,0,0-2,0,6,6,0,0,0,5,5.91v.88a1,1,0,0,0,2,0v-.88c6.63-1.12,6.63-10.7,0-11.82V80.74a4,4,0,0,1,3,3.86,1,1,0,0,0,2,0,6,6,0,0,0-5-5.91v-.88a1,1,0,0,0-2,0v.88c-6.63,1.12-6.63,10.7,0,11.82v7.95A4,4,0,0,1,82.7,94.6Zm5,3.86V90.74A4,4,0,0,1,87.7,98.46Zm-2-17.72v7.72A4,4,0,0,1,85.7,80.74Z"/><path class="cls-3" d="M62.7,104.6a39,39,0,0,1-39-39A1,1,0,0,0,22,64.89L14.7,72.19a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0l5.65-5.65A41.05,41.05,0,0,0,62.7,106.6,1,1,0,0,0,62.7,104.6Z"/></g></svg>
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
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>
                YouTube channel
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
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span>
                Video courses
                <span> Nx custom courses </span>
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
              href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
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
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
              </svg>
              <span>
                Install Nx Console
                <span>Plugin for VSCode</span>
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
                    fill="#0E2039"
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
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
