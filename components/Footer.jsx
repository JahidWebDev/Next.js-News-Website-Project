import Image from "next/image";
import Link from "next/link";
import logofooter from "../images/Sobdopoth.png"
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

// ================= MENU =================
const menuItems = [
  {
    id: 1,
    name: "আন্তর্জাতিক",
    slug: "/international",
  },
  {
    id: 2,
    name: "জাতীয়",
    slug: "/national",
  },
  {
    id: 3,
    name: "প্রেসক্লাব",
    slug: "/pressclub",
  },
  {
    id: 4,
    name: "রাজনীতি",
    slug: "/politics",
  },
  {
    id: 5,
    name: "অর্থনীতি",
    slug: "/economy",
  },
  {
    id: 6,
    name: "খেলা",
    slug: "/sports",
  },
  {
    id: 7,
    name: "বিনোদন",
    slug: "/entertainment",
  },
  {
    id: 8,
    name: "লাইফস্টাইল",
    slug: "/lifestyle",
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-[#f5f5f5] mt-16">

      {/* TOP MENU */}
      <div className="border-b border-gray-300 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-center flex-wrap gap-x-8 gap-y-3">

          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
              className="text-[17px] font-semibold text-[#111] hover:text-[#BB131A] duration-300"
            >
              {item.name}
            </Link>
          ))}

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>

<Link href="/">
  <Image
    src={logofooter}
    alt="logo"
    width={110}
    height={110}
    priority
    className="object-contain"
  />
</Link>

          <p className="mt-6 text-[17px] leading-[32px] text-gray-700">
            বাংলাদেশের সর্বশেষ খবর, রাজনীতি, আন্তর্জাতিক,
            খেলাধুলা, বিনোদন ও লাইফস্টাইল সংবাদ সবার আগে।
          </p>

          {/* SOCIAL ICON */}
          <div className="flex items-center gap-4 mt-8">

            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[18px] hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-[18px] hover:scale-110 duration-300"
            >
              <FaYoutube />
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-[18px] hover:scale-110 duration-300"
            >
              <FaXTwitter />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0077B5] text-white flex items-center justify-center text-[18px] hover:scale-110 duration-300"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center justify-center text-[18px] hover:scale-110 duration-300"
            >
              <FaInstagram />
            </Link>

          </div>

          {/* POLICY */}
          <div className="flex flex-wrap items-center gap-3 mt-8 text-[16px] font-medium text-gray-700">

            <Link
              href="/privacy-policy"
              className="hover:text-[#BB131A] duration-300"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <Link
              href="/terms-condition"
              className="hover:text-[#BB131A] duration-300"
            >
              Terms of Use
            </Link>

            <span>|</span>

            <Link
              href="/advertisement"
              className="hover:text-[#BB131A] duration-300"
            >
              Advertisement
            </Link>

          </div>

        </div>

        {/* MIDDLE */}
        <div>

          <h2 className="text-[34px] leading-[48px] font-black text-[#111]">
            প্রধান সম্পাদক : সৈয়দ আসিফ রহমান
          </h2>

          <p className="mt-5 text-[18px] leading-[34px] text-gray-700">
            বেঙ্গল মিডিয়া কর্পোরেশন লিমিটেড,
            <br />
            ২০২ কাজী নজরুল ইসলাম এভিনিউ,
            <br />
            কারওয়ান বাজার, ঢাকা-১২১৫
          </p>

          <div className="mt-6 text-[17px] leading-[34px] text-gray-800">

            <p>
              ফোন : +৮৮০-২-৫৫০১৩১১১-১৫
            </p>

            <p>
              নিউজ রুম : +৮৮০-১৭৮৮-৮৪৬১৬১-৭৩
            </p>

            <p>
              ই-মেইল : news@rtvbd.tv
            </p>

            <p>
              বিজ্ঞাপন : rtvdigitalad@gmail.com
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <h2 className="text-[28px] font-black text-[#111] border-b-2 border-[#BB131A] pb-3">
            আমাদের সম্পর্কে
          </h2>

          <p className="mt-5 text-[17px] leading-[34px] text-gray-700">
            নির্ভুল ও বস্তুনিষ্ঠ সংবাদ পরিবেশনের মাধ্যমে
            পাঠকদের কাছে বিশ্বস্ত সংবাদমাধ্যম হিসেবে
            পৌঁছে দেওয়াই আমাদের লক্ষ্য।
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#BB131A] text-white text-[17px] font-semibold hover:bg-black duration-300"
            >
              যোগাযোগ করুন
            </Link>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#BB131A] py-4 text-center text-white text-[17px] font-medium">
        © স্বত্বাধিকার সংরক্ষিত ২০১৬-২০২৬ | Shobdo Online
      </div>

    

    </footer>
  );
};

export default Footer;