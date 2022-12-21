import "./peckejs.scss";
import { FaDocker } from "react-icons/fa";
import { SiApache, SiRubygems, SiNpm, SiLinuxcontainers, SiNuget} from "react-icons/si";

const Packejs = () => {
  return (
    <div className="packejs-box">
      <div className="pacejs-top">
        <i className="fab fa-node-js fa-4x"></i>
        <h2 className="text-white mt-4">Get started with GitHub Packages</h2>
        <p>
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </p>
      </div>

      <div>
        <h4 className="mb-3">Choose a registry</h4>

        <ul className="pacejs-list">
          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <FaDocker color="#2496ED" />
              </span>
              <span>Docker</span>
            </h3>
            <p>
              A software platform used for building applications based on
              containers — small and lightweight execution environments.
            </p>

            <button>Learn more</button>
          </li>

          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <SiNuget color="#CA2136" />
              </span>
              <span>Apache Maven</span>
            </h3>
            <p>
              A default package manager used for the Java programming language
              and the Java runtime environment.
            </p>

            <button>Learn more</button>
          </li>

          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <FaDocker color="#2496ED" />
              </span>
              <span>NuGet</span>
            </h3>
            <p>
              A free and open source package manager used for the Microsoft
              development platforms including .NET.
            </p>

            <button>Learn more</button>
          </li>

          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <SiRubygems color="#D6422B" />
              </span>
              <span>RubyGems</span>
            </h3>
            <p>
              A standard format for distributing Ruby programs and libraries
              used for the Ruby programming language.
            </p>

            <button>Learn more</button>
          </li>

          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <SiNpm color="#CB0000" />
              </span>
              <span>npm</span>
            </h3>
            <p>
              A package manager for JavaScript, included with Node.js. npm makes
              it easy for developers to share and reuse code.
            </p>

            <button>Learn more</button>
          </li>

          <li className="pacejs-list__item">
            <h3>
              <span className="icons">
                <SiLinuxcontainers color="#C9D1D9" />
              </span>
              <span> Containers</span>
            </h3>
            <p>
              A software platform used for building applications based on
              containers — small and lightweight execution environments.
            </p>

            <button>Learn more</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Packejs;
