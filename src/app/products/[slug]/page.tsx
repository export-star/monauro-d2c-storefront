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
    outcomeDescription: "EMS massage, heated comfort, and air-bag compression support broader leg recovery routines after travel, training, or long days.",
    outcomes: [
      ["Full-Leg Recovery", "For users who want a broader leg routine than a calf-only device."],
      ["Travel Recovery", "For post-travel leg heaviness and long days away from a normal recovery setup."],
      ["At-Home Reset", "For a more settled recovery session at home after work or activity."],
      ["Giftable Wellness", "For shoppers comparing a broader leg device within the MONAURO recovery line."]
    ],
    routineTitle: "Wrap. Choose. Recover.",
    routineDescription: "A simple full-leg routine built around comfortable placement, heat, EMS massage, and air-bag compression support.",
    routineSteps: [
      ["Wrap", "Position the device for a comfortable full-leg session."],
      ["Choose", "Choose the routine that fits the recovery moment."],
      ["Recover", "Complete a focused leg-care session and return to movement."]
    ]
  },
  "relaxiwave-eye-mask": {
    outcomeTitle: "A calm routine for screen-heavy days and evening decompression.",
    outcomeDescription: "Vibration massage, heated comfort, built-in white noise, and a 15-minute soothing routine support eye-area relaxation after screen-heavy days.",
    outcomes: [
      ["Digital Eye Strain", "For users who want a quieter recovery ritual after long screen time."],
      ["Desk Fatigue", "For workdays when eyes and attention feel tired."],
      ["Evening Wind-Down", "For a lower-stimulation routine before rest."],
      ["Travel Rest", "For portable comfort moments during trips or long workdays."]
    ],
    routineTitle: "Settle. Cover. Reset.",
    routineDescription: "A simple relaxation routine built around a quiet moment, gentle coverage, and short-session comfort.",
    routineSteps: [
      ["Settle", "Create a quiet moment after screens, work, or travel."],
      ["Cover", "Place the eye mask comfortably and start a soothing eye-area routine."],
      ["Reset", "Return to the day with a short, repeatable wellness ritual."]
    ]
  },
  "back-massage-gun": {
    outcomeTitle: "Focused body relaxation for workdays and post-workout routines.",
    outcomeDescription: "Independent back massage support, four speed levels, and five massage heads help users build a focused full-body relaxation routine.",
    outcomes: [
      ["Back Tension", "For users who want focused relaxation around the back after long workdays."],
      ["Desk Fatigue", "For simple body-care routines around sedentary work."],
      ["Post-Workout Recovery", "For a targeted relaxation step after training, without medical or performance guarantees."],
      ["Attachment-Based Focus", "Five included massage heads support different body-care routines."]
    ],
    routineTitle: "Target. Attach. Ease.",
    routineDescription: "A focused body routine built around reach, attachment choice, and controlled massage intensity.",
    routineSteps: [
      ["Target", "Choose the body area that needs focused relaxation."],
      ["Attach", "Select one of the included massage heads for the routine."],
      ["Ease", "Use a controlled pace and let the 15-minute smart timer keep the session structured."]
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
