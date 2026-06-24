document.querySelectorAll('.pipeline-row').forEach(row => {
  row.addEventListener('click', () => {
    document.querySelectorAll('.pipeline-row').forEach(r => r.classList.remove('active'));
    row.classList.add('active');
  });
});
