document.getElementById('surpriseBtn').addEventListener('click', function () {
  const note = document.getElementById('surprise');
  note.hidden = !note.hidden;
  this.textContent = note.hidden ? 'Open your little surprise ✨' : 'A little note, just for you 💜';
});
