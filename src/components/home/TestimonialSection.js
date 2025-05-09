import {TestimonialSlider} from "../ui/general/SwiperSlider";

export default function TestimonialSection() {
    return(
        <section className="bg-[#F2FAFB] py-16 px-4 pt-0">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl mb-2 pt-10 text-center">What People are Saying?</h2>
                <div className="mt-2 mb-10 flex justify-center">
                    <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
                    <span className="w-2 h-1 bg-orange-400 rounded"></span>
                    <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
                </div>
                <TestimonialSlider/>
            </div>
        </section>
    );
}