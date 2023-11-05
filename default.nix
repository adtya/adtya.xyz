{ stdenvNoCC, zs }:
stdenvNoCC.mkDerivation rec {
  name = "adtya_xyz";
  version = "2023-11-06";
  src = ./.;

  nativeBuildInputs = [ zs ];

  buildPhase = ''
    zs build
  '';

  installPhase = ''
    mkdir -p $out/share
    cp -r .pub $out/share/web
  '';
}
