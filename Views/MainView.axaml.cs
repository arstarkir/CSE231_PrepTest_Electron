using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Platform.Storage;
using CSE231_PrepTest_Avalonia.ViewModels;
using System.IO;
using ReactiveUI;
using System.Collections.Generic;

namespace CSE231_PrepTest_Avalonia.Views
{
    public partial class MainView : UserControl
    {
        public MainView()
        {
            InitializeComponent();
            DataContext = new MainViewModel();
        }

        private async void OpenFileButton_Clicked(object sender, RoutedEventArgs e)
        {
            if (this.VisualRoot is Window topLevel)
            {
                // Start async operation to open the dialog.
                var files = await topLevel.StorageProvider.OpenFilePickerAsync(new FilePickerOpenOptions
                {
                    Title = "Open Text File",
                    AllowMultiple = true
                });

                // Ensure DataContext is correctly cast to MainViewModel.
                if (DataContext is MainViewModel viewModel)
                {
                    foreach (var file in files)
                    {
                        // Open reading stream from the first file.
                        await using var stream = await file.OpenReadAsync();
                        using var streamReader = new StreamReader(stream);
                        // Reads all the content of file as a text.
                        var fileContent = await streamReader.ReadToEndAsync();
                        viewModel.FileAddToTests(file.Path.AbsolutePath.ToString(), fileContent);
                    }
                }
            }

        }
    }
}