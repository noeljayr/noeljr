import Image from "next/image";
import noel from "@/public/images/noel-luhanga.jpg";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <div className="shead io">
          <h2 id="about-heading" className="heading">
            About
          </h2>
          <span className="subheading">Delivering Since 2022</span>
        </div>
        <div className="about-grid">
          <div className="about-left io">
            <div>
              <figure className="portrait">
                <Image
                  src={noel}
                  alt="Portrait of Noel Jr. Luhanga, Product Designer and Developer"
                />
              </figure>
            </div>
          </div>
          <div className="about-right">
            <p className="io">
              <strong>Product designer and developer. </strong>I solve problems
              by building systems that work beautifully for users—not by moving
              pixels around, but through decisions that help products gain and
              retain customers. My best work lives at the intersection of design
              thinking and code, like <strong>KIN</strong>, an app I built to
              unify fragmented financial data into one intuitive interface.
            </p>
            <p className="io">
              I believe great design isn&apos;t decoration—it&apos;s structure,
              clarity, and the small details that make experiences feel
              effortless
            </p>
            {/* Final values rendered statically since the count-up lives in scripts.js */}
            <div className="stats io">
              <div>
                <b data-count="4" data-suffix="+">
                  4+
                </b>
                <span>Years designing</span>
              </div>
              <div>
                <b data-count="30" data-suffix="+">
                  30+
                </b>
                <span>Products launched</span>
              </div>
              <div>
                <b data-count="4" data-suffix="×">
                  4×
                </b>
                <span>Systems built</span>
              </div>
              <div>
                <b data-count="4">4</b>
                <span>Teams worked with</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
