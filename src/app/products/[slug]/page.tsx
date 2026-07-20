import { notFound } from "next/navigation";
import { CalfProLanding } from "@/components/commerce/calf-pro-landing";
import { ProductLongLanding, type ProductLongPageCopy } from "@/components/commerce/product-long-landing";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const productPageCopy: Record<string, ProductLongPageCopy> = {
  "recoveryair-calf-pro": {
    outcomeTitle: "When your calves feel heavy, your recovery routine should feel simple.",
    outcomeDescription: "This section avoids medical guarantees and frames product value around daily lower-leg recovery support.",
    outcomes: [
      ["Heavy Legs", "For long sitting, standing, travel, or workdays when your calves feel weighed down."],
      ["Calf Tightness", "For a focused calf routine using rhythmic inflation and deflation."],
      ["Post-Workout Soreness", "For a simple lower-leg relaxation routine after runs, lifting, or sports."],
      ["Daily Mobility", "For short sessions that help users return to movement without overusing the device."]
    ],
    routineTitle: "Relax. Secure. Restart.",
    routineDescription: "A simple routine built around fastening the calf device, choosing a massage level, and completing a short 15-minute session.",
    routineSteps: [
      ["Relax", "Select Level 1 for Relax massage, with rhythmic upper, middle, lower, and full inflation sequences."],
      ["Secure", "Fasten the device with the Velcro straps and adjust tightness to a comfortable position before starting."],
      ["Restart", "Use a session of up to 15 minutes, then remove the device and return to your day."]
    ]
  },
  "recoveryair-leg-elite": {
    outcomeTitle: "A broader leg routine for travel, training, and long days.",
    outcomeDescription: "EMS massage, heat, and air-bag compression are confirmed. Exact intensity levels, timing, sizing, and battery claims remain pending until the manual is supplied.",
    outcomes: [
      ["Full-Leg Recovery", "For users who want a broader leg routine than a calf-only device."],
      ["Travel Recovery", "For post-travel leg heaviness and long days away from a normal recovery setup."],
      ["At-Home Reset", "For a more settled recovery session at home after work or activity."],
      ["Giftable Wellness", "For a premium recovery-device presentation once packaging and bundle details are confirmed."]
    ],
    routineTitle: "Wrap. Choose. Recover.",
    routineDescription: "A full-leg routine concept based on confirmed core functions, with exact operating instructions pending manual confirmation.",
    routineSteps: [
      ["Wrap", "Position the device for a comfortable full-leg session according to the final user manual."],
      ["Choose", "Select the appropriate mode only after mode names, intensity levels, and indicators are confirmed."],
      ["Recover", "Keep session language conservative until timing and safety guidance are verified."]
    ]
  },
  "relaxiwave-eye-mask": {
    outcomeTitle: "A calm routine for screen-heavy days and evening decompression.",
    outcomeDescription: "The confirmed feature set includes vibration massage, heated comfort, built-in white noise, and a 15-minute soothing massage routine.",
    outcomes: [
      ["Digital Eye Strain", "For users who want a quieter recovery ritual after long screen time."],
      ["Desk Fatigue", "For workdays when eyes and attention feel tired."],
      ["Evening Wind-Down", "For a lower-stimulation routine before rest."],
      ["Travel Rest", "For portable comfort moments during trips, once charging and portability details are confirmed."]
    ],
    routineTitle: "Settle. Cover. Reset.",
    routineDescription: "A simple relaxation story that can be refined once exact heat levels, battery details, and safety guidance are confirmed.",
    routineSteps: [
      ["Settle", "Create a quiet moment after screens, work, or travel."],
      ["Cover", "Use the eye mask as directed by the final manual and avoid claims beyond relaxation support."],
      ["Reset", "Return to the day with a short, repeatable wellness ritual."]
    ]
  },
  "back-massage-gun": {
    outcomeTitle: "Focused body relaxation for workdays and post-workout routines.",
    outcomeDescription: "The independent back massage concept is confirmed. Speed levels, attachment uses, and detailed safety guidance still need the product manual.",
    outcomes: [
      ["Back Tension", "For users who want focused relaxation around the back after long workdays."],
      ["Desk Fatigue", "For simple body-care routines around sedentary work."],
      ["Post-Workout Recovery", "For a targeted relaxation step after training, without medical or performance guarantees."],
      ["Attachment-Based Focus", "Product visuals show multiple heads; exact attachment names and use cases need confirmation."]
    ],
    routineTitle: "Target. Attach. Ease.",
    routineDescription: "A focused body routine concept that should be finalized after speed levels and attachment instructions are supplied.",
    routineSteps: [
      ["Target", "Choose the body area according to the final safety instructions."],
      ["Attach", "Select the right attachment only after attachment names and intended uses are confirmed."],
      ["Ease", "Use conservative timing and pressure guidance until the product manual is provided."]
    ]
  }
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const pageCopy = productPageCopy[product.slug] ?? productPageCopy["recoveryair-calf-pro"];
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  if (product.slug === "recoveryair-calf-pro") {
    return <CalfProLanding product={product} relatedProducts={relatedProducts} />;
  }

  return <ProductLongLanding product={product} pageCopy={pageCopy} relatedProducts={relatedProducts} />;
}
