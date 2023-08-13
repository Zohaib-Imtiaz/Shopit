"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{ fontWeight: 600 }}>Configured for Experts by Expert</h1>
      <div
        style={{
          display: "inline-flex",
          gap: "24px",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <p>Muhammad Zohaib Imtiaz</p>
        <a href="https://www.linkedin.com/in/muhammad-zohaib-imtiaz/">
          <Image
            src="/linkedin-color.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            priority
          />
        </a>
        <a href="https://github.com/Zohaib-Imtiaz">
          <Image
            src="/github-color.svg"
            alt="Github"
            width={32}
            height={32}
            priority
          />
        </a>
      </div>
      <div className={styles.center}>
        <Card
          hoverable
          style={{
            backgroundColor: "#acacac",
          }}
        >
          <div>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={100}
              priority
            />
          </div>
          <div>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>-&gt;</span>
              </h2>
              <p>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>-&gt;</span>
              </h2>
              <p>Explore the Next.js 13 playground.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </a>
          </div>
        </Card>
        <Card
          hoverable
          style={{
            backgroundColor: "#acacac",
          }}
        >
          <div>
            <Image
              src="/ant-design-logo.svg"
              alt="Ant Design Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div>
            <a
              href="https://ant.design/docs/spec/introduce"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Design <span>-&gt;</span>
              </h2>
              <p>Learn about Ant User-Experience Design</p>
            </a>

            <a
              href="https://ant.design/docs/react/introduce"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Development <span>-&gt;</span>
              </h2>
              <p>
                Develop with Enterprise-class UI designed for web applications
              </p>
            </a>

            <a
              href="https://ant.design/components/overview/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Components <span>-&gt;</span>
              </h2>
              <p>
                Written in TypeScript, A set of high-quality React components
                out of the box.
              </p>
            </a>

            <a
              href="https://ant.design/docs/resources"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Resources <span>-&gt;</span>
              </h2>
              <p>List of highly curated resources to get it started.</p>
            </a>
          </div>
        </Card>
        <Card
          hoverable
          style={{
            backgroundColor: "#acacac",
          }}
        >
          <div>
            <Image
              src="/storybook.svg"
              alt="Storybook Logo"
              width={180}
              height={100}
              priority
            />
          </div>
          <div>
            <a
              href="https://storybook.js.org/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Storybook <span>-&gt;</span>
              </h2>
              <p>Build UIs without the grunt work, in isolation.</p>
            </a>

            <a
              href="https://storybook.js.org/docs/react/get-started/install/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Guides <span>-&gt;</span>
              </h2>
              <p>Learn everything you need to know to use Storybook.</p>
            </a>

            <a
              href="https://storybook.js.org/tutorials/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Tutorials <span>-&gt;</span>
              </h2>
              <p>
                Follow guided walkthroughs on for Storybook’s key workflows.
              </p>
            </a>

            <a
              href="https://storybook.js.org/integrations"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Integrations <span>-&gt;</span>
              </h2>
              <p>Connect workflows and unlock features.</p>
            </a>
          </div>
        </Card>
      </div>
    </main>
  );
}
