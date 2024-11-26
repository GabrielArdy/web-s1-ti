document.addEventListener("DOMContentLoaded", function () {
  const lowonganList = [
    {
      id: 1,
      mataKuliah: "Pemrograman Web",
      fakultas: "Fakultas Teknologi Informasi",
      lokasi: "Lab Komputer 1",
      deadline: "22 November 2024",
      periodeKerja: "1 Des - 28 Feb 2025",
      onBoarding: "2 Des 2024",
      targetPeserta: "Mahasiswa Aktif",
      kuota: 3,
      deskripsi: [
        "Membantu dosen dalam praktikum pemrograman web",
        "Menyiapkan materi praktikum",
        "Melakukan evaluasi tugas mahasiswa",
      ],
      kriteria: [
        "IPK minimal 3.00",
        "Menguasai HTML, CSS, dan JavaScript",
        "Memiliki kemampuan komunikasi yang baik",
        "Bertanggung jawab dan disiplin",
      ],
      kompetensi: ["Web Development", "Problem Solving", "Teaching Skills"],
    },
    // Tambahkan lowongan lainnya di sini
  ];

  const lowonganListElement = document.querySelector(".lowongan-list");
  const lowonganDetailElement = document.querySelector(".lowongan-detail");

  function renderLowonganList() {
    lowonganListElement.innerHTML = lowonganList
      .map(
        (lowongan) => `
          <div class="lowongan-card" data-id="${lowongan.id}">
              <h3>${lowongan.mataKuliah}</h3>
              <div class="lowongan-info">
                  <p>${lowongan.fakultas}</p>
                  <p>Lokasi: ${lowongan.lokasi}</p>
                  <p>Deadline: ${lowongan.deadline}</p>
                  <p>Kuota: ${lowongan.kuota} posisi</p>
              </div>
          </div>
      `
      )
      .join("");
  }

  function renderLowonganDetail(lowongan) {
    lowonganDetailElement.innerHTML = `
          <h2>${lowongan.mataKuliah}</h2>
          <p>${lowongan.fakultas}</p>
          <div class="lowongan-info">
              <p>Periode Kerja: ${lowongan.periodeKerja}</p>
              <p>On Boarding: ${lowongan.onBoarding}</p>
              <p>Target Peserta: ${lowongan.targetPeserta}</p>
              <p>Lokasi: ${lowongan.lokasi}</p>
          </div>
          <h3>Deskripsi Pekerjaan</h3>
          <ul>
              ${lowongan.deskripsi.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <h3>Kriteria</h3>
          <ul>
              ${lowongan.kriteria.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <h3>Kompetensi yang Dikembangkan</h3>
          <ul>
              ${lowongan.kompetensi.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <button class="btn btn-primary">Daftar Sekarang</button>
      `;
  }

  renderLowonganList();

  lowonganListElement.addEventListener("click", function (e) {
    const card = e.target.closest(".lowongan-card");
    if (card) {
      const lowonganId = parseInt(card.dataset.id);
      const selectedLowongan = lowonganList.find((l) => l.id === lowonganId);
      if (selectedLowongan) {
        renderLowonganDetail(selectedLowongan);
        document
          .querySelectorAll(".lowongan-card")
          .forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      }
    }
  });
});
