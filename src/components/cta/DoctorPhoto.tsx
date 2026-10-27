import Image from 'next/image';

/** Replaced by the owner with a file of the same name; the code does not depend on its content. */
const DOCTOR_PHOTO = '/assets/img/ecaterina_pintea_ava.png';

type Props = {
  /** Rendered size in CSS px; also picks the 1x/2x variants next/image generates. */
  size: 48 | 64;
  className?: string;
};

/** The doctor's round photo shown next to the booking CTA (pill on desktop, above the dock button on phones). */
export default function DoctorPhoto({ size, className = '' }: Props) {
  return (
    <Image
      src={DOCTOR_PHOTO}
      alt=""
      width={size}
      height={size}
      quality={75}
      className={`shrink-0 rounded-full object-cover object-top ${className}`}
    />
  );
}
