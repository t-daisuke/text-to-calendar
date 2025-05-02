// 拡張機能のインストール時に実行
chrome.runtime.onInstalled.addListener(() => {
  console.log('拡張機能がインストールされました');
  
  // コンテキストメニューの作成
  chrome.contextMenus.create({
    id: "addToCalendar",
    title: "カレンダーに予定を追加",
    contexts: ["selection"]  // テキスト選択時のみ表示
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('コンテキストメニューの作成に失敗:', chrome.runtime.lastError);
    } else {
      console.log('コンテキストメニューが作成されました');
    }
  });
});

// コンテキストメニューがクリックされた時の処理
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "addToCalendar") {
    // 選択されたテキストを取得
    const selectedText = info.selectionText;
    
    if (!selectedText || selectedText.trim() === '') {
      console.warn('選択テキストが空です');
      return;
    }
    
    console.log('選択テキスト:', selectedText);
    
    // Googleカレンダーの新規予定作成URLを生成
    const calendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(selectedText)}`;
    console.log('生成されたURL:', calendarUrl);
    
    // 新しいタブでカレンダーを開く
    chrome.tabs.create({ url: calendarUrl }, (tab) => {
      if (chrome.runtime.lastError) {
        console.error('タブの作成に失敗:', chrome.runtime.lastError);
      } else {
        console.log('新しいタブでカレンダーを開きました:', tab.id);
      }
    });
  }
}); 