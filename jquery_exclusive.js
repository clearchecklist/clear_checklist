<script>
$(function() {
  $('.exclusive').mousedown(function() {
    var linked = $(this).data('linked');
    $(':checkbox[data-linked="' + linked + '"]').prop('checked', false);
  });
});
</script>