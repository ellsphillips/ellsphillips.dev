import { SocialIcon } from "react-social-icons"

const socials = [
  <SocialIcon network="github" url="https://github.com/ellsphillips" />,
  <SocialIcon
    network="linkedin"
    url="https://linkedin.com/in/elliott-phillips"
  />,
]

export default function About() {
  return (
    <section className="py-12 space-y-4 text-lg border-none">
      <p>Hi, I'm Elliott, a Software Engineer from South Wales.</p>

      <p>
        I wear 3 hats: full stack development, product design, and team
        leadership. I'm passionate about growing with people and technologies to
        deliver products the meet user need.
      </p>

      <p>Thanks for stopping by my corner of the internet - let's connect.</p>

      <section className="flex gap-4 p-2 border-y">
        {Object.values(socials).map((social) => (
          <a href={social.props.href} key={social.type}>
            {social}
          </a>
        ))}
      </section>
    </section>
  )
}
