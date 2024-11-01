import React from "react";

function Homepage() {
  return (
    <>
      <section class="bg-secondary flex items-center justify-center min-h-screen mb-3 mt-20 md:mt-0">
        <div class="container mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between w-full">
          <div class="w-full md:w-1/2 bg-white rounded-xl shadow dark:bg-gray-800 flex flex-col items-center justify-center p-4 md:p-10 mb-4 md:mb-0 md:mr-4">
            <div class="flex items-center justify-center mb-10">
              <div class="w-full h-auto" id="radial-chart"></div>
            </div>
            <div class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col md:flex-row items-center justify-center p-4">
              <div class="w-16 h-16 rounded-full bg-teal-200 text-bold text-lg font-bold flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                %
              </div>
              <div class="text-center md:text-left">
                <h5 class="text-lg font-bold text-bold">
                  Persentase Keseluruhan
                </h5>
                <p class="mt-2 text-sm text-primary">
                  Kualitas tidur Anda tergolong .
                </p>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 bg-white rounded-xl shadow dark:bg-gray-800 flex flex-col items-center justify-center p-4 md:p-10 mb-4 md:mb-0 md:mr-4">
            <div class="flex items-center justify-center mb-10">
              <div class="w-full h-auto" id="stress-radial-chart"></div>
            </div>

            <div class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col md:flex-row items-center justify-center p-4">
              <div class="w-16 h-16 rounded-full bg-teal-200 text-bold text-lg font-bold flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                %
              </div>
              <div class="text-center md:text-left">
                <h5 class="text-lg font-bold text-bold">
                  Persentase Keseluruhan
                </h5>
                <p class="mt-2 text-sm text-primary">
                  Tingkat stres Anda tergolong .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white flex flex-col-reverse items-center justify-center min-h-screen mb-3 md:mb-20">
        <div class="container mx-auto max-w-screen-xl p-4">
          <div class="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <img
              src="{{ asset('assets/klasifikasi-pic.svg') }}"
              alt="Sleeping Illustration"
              class="w-full object-contain order-2 md:order-1"
            />
            <div class="order-1 md:order-2 mb-6 md:mb-0 md:ml-6 max-w-lg">
              <h1 class="text-3xl md:text-4xl font-bold text-bold">
                Klasifikasi Gangguan Tidur
              </h1>
              <p class="mt-4 text-primary">
                Tidur adalah jendela kebahagiaan yang tak ternilai. Dengan
                teknologi kami, kita dapat membantu mengenali gangguan yang
                menghalangi pintu itu terbuka lebar.
              </p>
              <div class="flex justify-center md:justify-start mt-6 w-full md:w-auto order-3 md:order-none">
                <button class="text-white bg-primary hover:bg-gray-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  <a href="/klasifikasi-gangguan-tidur">Mulai</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
