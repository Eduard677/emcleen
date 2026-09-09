(() => {
  document.getElementById('feedback-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Name: ${data.get('name') || 'Not provided'}`,
      `Contact: ${data.get('contact') || 'Not provided'}`,
      `Visit date: ${data.get('visit_date') || 'Not provided'}`,
      '',
      String(data.get('feedback') || '')
    ].join('\n');
    location.href = `mailto:bledar24@gmail.com?subject=${encodeURIComponent('Private car wash feedback')}&body=${encodeURIComponent(message)}`;
  });
})();
