"use client";
import Link from "next/link";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <div className="inter-var flex gap-20 flex-col sm:flex-row">
      <Link target="_blank" href={"https://unstop.com/p/infinitus-pass-srmap-students-infinitus-2026-srm-university-srmap-andhra-pradesh-1638288"}>
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[35rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8 transition-all duration-300 ease-in-out">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 text-white">
              Registrations for SRMAP university students
            </div>
            <div className="text-neutral-500 hover:scale-105 text-xl sm:text-2xl mt-2 dark:text-neutral-300 transition-transform duration-200 ease-in-out">
              Click here to continue
            </div>
            <div className="w-full mt-8">
              <Image
                src="/images/team/col1.jpeg"
                height={1000}
                width={1000}
                className="h-[46rem] w- w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105 transition-all duration-500 ease-out"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link target="_blank" href={"https://unstop.com/p/infinitus-pass-external-students-infinitus-2026-srm-university-srmap-andhra-pradesh-1638298"}>
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[35rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8 transition-all duration-300 ease-in-out">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 text-white">
              Registrations for External Students
            </div>
            <div className="text-neutral-500 text-xl hover:scale-105 sm:text-2xl mt-2 dark:text-neutral-300 transition-transform duration-200 ease-in-out">
              Click here to continue
            </div>
            <div className="w-full mt-8">
              <Image
                src="/images/team/exter1.jpeg"
                height={1000}
                width={1000}
                className="h-[46rem] w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105 transition-all duration-500 ease-out"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
